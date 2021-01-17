import smtplib, ssl

port = 587  # For starttls
smtp_server = "smtp.gmail.com"
sender_email = "hroudadam@gmailcom"
receiver_email = "hroudaadam@gmail.com"
password = input("Type your password and press enter:")
message = """\
Subject: Python

zpráva
"""

context = ssl.create_default_context()

with smtplib.SMTP(smtp_server, port) as server:
    server.starttls(context=context)
    server.login(sender_email, password) 
    for i in range(10):                
        server.sendmail(sender_email, receiver_email, message)
