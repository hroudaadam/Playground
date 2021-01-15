from __future__ import print_function
import pickle
import os.path
import os
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import base64
import re

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
SERVICE = None

def clean_html(raw_html):
  cleanr = re.compile('<.*?>')
  clean_text = re.sub(cleanr, '', raw_html)
  return clean_text

def get_emails():
    response = SERVICE.users().messages().list(userId='me', labelIds='Label_1098579968320269033').execute()
    emails = response['messages']
    for email in emails:
        get_email(email['id'])

def get_attachment(att_id, email_id, dir_name, file_name):
    att = SERVICE.users().messages().attachments().get(userId='me', messageId=email_id, id=att_id).execute()
    file_data = base64.urlsafe_b64decode(att['data'].encode('UTF-8'))
    with open("./gmail-api/" + dir_name + "/" + file_name, 'wb') as f:
        f.write(file_data)
    
    print(f"Attachment {file_name} saved!")

def get_email(email_id):
    response = SERVICE.users().messages().get(userId='me', id=email_id, format='full').execute()
    message_raw_parts = response['payload']['parts'][0]
    if 'parts' in message_raw_parts:
        message_raw = message_raw_parts['parts'][1]['body']['data']
    else:
        message_raw = message_raw_parts['body']['data']

    message_decoded = base64.urlsafe_b64decode(message_raw).decode('utf-8')
    message_delimited = message_decoded.replace('<br><br>', '|')
    message_cleared = clean_html(message_delimited)
    message_splited = message_cleared.split('|')

    dir_name = message_splited[0].split(',')[0]

    atts = response['payload']['parts']
    atts.pop(0)

    try:
        os.mkdir("./gmail-api/" + dir_name)
    except:
        print("Adresář již existuje!")
    
    with open("./gmail-api/" + dir_name + "/text.txt", 'w') as f:
        for message_part in message_splited:
            f.write(message_part + '\n\n')

    print(f"Email message {dir_name} saved!")

    for att in atts:
        file_name = att['filename']
        if file_name != "":
            att_id = att['body']['attachmentId']
            get_attachment(att_id, email_id, dir_name, file_name)

def create_service():
    creds = None
    if os.path.exists('./gmail-api/token.pickle'):
        with open('./gmail-api/token.pickle', 'rb') as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                './gmail-api/credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('./gmail-api/token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('gmail', 'v1', credentials=creds)
    return service

SERVICE = create_service()
get_emails()
