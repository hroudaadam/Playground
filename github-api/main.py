import requests
import base64

# downloads file from GitHub repo
def downloadFileFromGitHub(uri):
    response = requests.get(uri)
    body = response.json()

    content = base64.b64decode(body["content"]).decode('utf-8')
    print(content)
    fileName = body["name"]


    with open(fileName, "w", encoding="utf-8") as f:
        f.write(content)
        f.close()


downloadFileFromGitHub("https://api.github.com/repos/hroudaadam/mindsphere-sdk-dotnet/contents/src/MindSphereSdk/Common/SdkClient.cs?ref=master")