pipeline {
    agent { label 'MyAgent1' }

    stages {

        stage('Copy Files') {
            steps {
                echo 'Copying files'
                sh '''
                rm -rf /home/ubuntu/current/
                mkdir /home/ubuntu/current
                cp -r * /home/ubuntu/current/
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh '''
                cd /home/ubuntu/current
                sudo docker build -t nodeapi:v1 .
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running container'
                sh '''
                sudo docker stop nodeapi-container || true
                sudo docker rm nodeapi-container || true
                sudo docker run -d -p 5000:5000 --name nodeapi-container nodeapi:v1
                '''
            }
        }

    }
}
