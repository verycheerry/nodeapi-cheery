pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/verycheerry/nodeapi-project-cheeryA2-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('NodeAPI') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Application') {
            steps {
                dir('NodeAPI') {
                    sh 'nohup node index.js &'
                }
            }
        }

    }
}
