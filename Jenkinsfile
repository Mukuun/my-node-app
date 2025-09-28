pipeline {
    agent any

    environment {
        registry = "yourdockerhubusername/yourimagename"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    stages {
        // DELETE THIS ENTIRE STAGE
        // stage('Cloning Git') {
        //     steps {
        //         git 'https://github.com/yourusername/yourrepository.git'
        //     }
        // }

        stage('Building Docker Image') {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }
        // ... the rest of your stages ...
    }
    post {
        always {
            cleanWs()
        }
    }
}
