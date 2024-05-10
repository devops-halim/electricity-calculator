FROM python:3.9-slim
LABEL maintaine="a.@alnasani.com"

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY app /app

# Install any needed packages specified in requirements.txt
#RUN pip install --trusted-host pypi.python.org -r requirements.txt
RUN pip install --upgrade pip -r requirements.txt


# Install Gunicorn
RUN pip install gunicorn

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
