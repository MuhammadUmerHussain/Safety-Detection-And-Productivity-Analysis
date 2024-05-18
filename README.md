This project is a web application that enables users to upload videos for real-time object detection, action recognition, and activity counting using YOLOv8, MediaPipe, and a Python-based Flask server. The application leverages Cloudinary for video storage and retrieval.

#Key Features

Object Detection: Accurately detects helmets, safety vests, and masks in uploaded videos using YOLOv8, a state-of-the-art object detection model.
Action Recognition: Employs MediaPipe's pose estimation capabilities to count sawing actions, arm movements (left and right), and shoulder movements (left and right) in the video.
Visualization: Generates informative graphs that depict the counts of detected objects (helmets, safety vests, masks) and the frequency of sawing actions, arm movements, and shoulder movements throughout the video. These graphs are displayed on the frontend using React.
Cloudinary Integration: Securely stores and manages uploaded videos using Cloudinary's cloud storage and media management services.
React Frontend: Provides a user-friendly interface for video upload, object detection results display, and graph visualization.
Technologies Used

#Backend:
Python
Flask
YOLOv8
MediaPipe
Cloudinary 
#Frontend:
React
Clerk Authentication

``` git clone  https://github.com/MuhammadUmerHussain/SafetyDetection.git ``` 
cd SafetyDetection

#For Frontend 
give your cloudinary api key upload widget 

https://cloudinary.com/documentation/upload_widget 

Give clerk authentication api key in App.js

In vs code terminal
``` npm i```

After installing node modules 
``` npm start```

# Backend 

Open fyp stuff (2) in jupyter notebook

Run flask server block


# FrontEnd Dashboard 
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/b7935901-de49-4228-997a-eca941a54008)
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/f1d849e0-cb98-4351-ac39-1187982729b7)
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/74fd7598-7767-4a37-87f2-ba5520272d28)
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/6ecbeb6f-5df2-4ce6-b2ef-97c596a88842)
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/0ea313c4-1140-4f20-b17f-62e722f3b570)
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/01777509-861e-42c9-8c07-3c5fbeac0722)

#Backend 

Yolo and media pipe processed video will save on results/media 
![image](https://github.com/MuhammadUmerHussain/SafetyDetection/assets/108338561/0af69be8-7d3a-4e10-8b08-f4a55829413b)

Notice counts on left upside 










