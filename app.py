# from flask import Flask, render_template, request, send_from_directory
# import os
# from fal_client import subscribe, InProgress
# import requests
# import time
# from dotenv import load_dotenv


# load_dotenv()

# app = Flask(__name__)
# OUTPUT_DIR = "outputs"
# os.makedirs(OUTPUT_DIR, exist_ok=True)

# FAL_KEY = os.getenv("FAL_KEY")
# if not FAL_KEY:
#     raise ValueError("Please set your FAL_KEY in the .env file.")

# def on_queue_update(update):
#     """Handle progress updates from the API."""
#     if isinstance(update, InProgress):
#         for log in update.logs:
#             print(log.get("message", ""))


# @app.route("/", methods=["GET", "POST"])
# def index():
#     video_file = None
#     status = None

#     if request.method == "POST":
#         prompt = request.form.get("prompt")
#         duration = request.form.get("duration", "5")
#         aspect_ratio = request.form.get("aspect_ratio", "16:9")

#         if not prompt:
#             status = "Error: Prompt cannot be empty."
#             return render_template("index.html", status=status, video_file=video_file)

#         filename = f"video_{int(time.time())}.mp4"
#         filepath = os.path.join(OUTPUT_DIR, filename)

#         try:
#             status = "Generating video..."
#             result = subscribe(
#                 "fal-ai/veo2",
#                 arguments={
#                     "prompt": prompt,
#                     "duration_seconds": int(duration),
#                     "aspect_ratio": aspect_ratio
#                 },
#                 with_logs=True,
#                 on_queue_update=on_queue_update,
#             )

#             if "error" in result:
#                 status = f"Error: {result['error']}"
#             else:
#                 video_url = result.get("video")
#                 if video_url:
#                     r = requests.get(video_url)
#                     with open(filepath, "wb") as f:
#                         f.write(r.content)
#                     status = "Done!"
#                     video_file = filename
#                 else:
#                     status = "Error: No video returned."
#         except Exception as e:
#             # Detect balance exhausted error
#             if "Exhausted balance" in str(e):
#                 status = (
#                     "Error: Your account balance is exhausted. "
#                     "Please top up at fal.ai/dashboard/billing."
#                 )
#             else:
#                 status = f"Error: {str(e)}"

#     return render_template("index.html", status=status, video_file=video_file)


# @app.route("/outputs/<filename>")
# def serve_video(filename):
#     return send_from_directory(OUTPUT_DIR, filename)


# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, render_template, request, send_from_directory
import os
import requests
import time
from fal_client import subscribe, InProgress
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
OUTPUT_DIR = "outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FAL_KEY = os.getenv("FAL_KEY")
if not FAL_KEY:
    raise ValueError("Please set your FAL_KEY in the .env file.")


def on_queue_update(update):
    """Handle progress updates from the API."""
    if isinstance(update, InProgress):
        for log in update.logs:
            print(log.get("message", ""))


@app.route("/", methods=["GET", "POST"])
def index():
    video_file = None
    status = None

    if request.method == "POST":
        prompt = request.form.get("prompt")
        duration = request.form.get("duration", "5")
        aspect_ratio = request.form.get("aspect_ratio", "16:9")
        model = request.form.get("model", "veo")

        if not prompt:
            status = "Error: Prompt cannot be empty."
            return render_template("index.html", status=status, video_file=video_file)

        filename = f"video_{int(time.time())}.mp4"
        filepath = os.path.join(OUTPUT_DIR, filename)

        try:
            status = "Generating video..."
            # Handle different models
            if model == "veo":
                # Paid model via fal_client
                result = subscribe(
                    "fal-ai/veo2",
                    arguments={
                        "prompt": prompt,
                        "duration_seconds": int(duration),
                        "aspect_ratio": aspect_ratio
                    },
                    with_logs=True,
                    on_queue_update=on_queue_update,
                )

                if "error" in result:
                    status = f"Error: {result['error']}"
                else:
                    video_url = result.get("video")
                    if video_url:
                        r = requests.get(video_url)
                        with open(filepath, "wb") as f:
                            f.write(r.content)
                        status = "Done!"
                        video_file = filename
                    else:
                        status = "Error: No video returned."

            elif model == "bytedance_seedance":
                # Free Bytedance Seedance Lite API via REST
                api_url = "https://fal.ai/models/fal-ai/bytedance/seedance/v1/lite/text-to-video/api"
                headers = {
                    "Authorization": f"Bearer {FAL_KEY}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "prompt": prompt,
                    "duration_seconds": int(duration),
                    "aspect_ratio": aspect_ratio
                }
                response = requests.post(api_url, json=payload, headers=headers)
                data = response.json()

                if "error" in data:
                    status = f"Error: {data['error']}"
                else:
                    video_url = data.get("video")
                    if video_url:
                        r = requests.get(video_url)
                        if r.status_code == 200 and r.content:
                            with open(filepath, "wb") as f:
                                f.write(r.content)
                        else:
                            status = f"Error: Failed to download video. Status code {r.status_code}, Response: {r.text}"

                        status = "Done! (Bytedance Seedance Lite)"
                        video_file = filename
                    else:
                        status = "Error: No video returned from Bytedance."

            else:
                status = "Error: Invalid model selected."

        except Exception as e:
            status = f"Error: {str(e)}"

    return render_template("index.html", status=status, video_file=video_file)


@app.route("/outputs/<filename>")
def serve_video(filename):
    return send_from_directory(OUTPUT_DIR, filename)


if __name__ == "__main__":
    app.run(debug=True)
