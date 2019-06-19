pipeline {
    agent any

    stages {
        stage('Build Application') {
            steps {
                sh "npm install"
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy Application') {
            steps {
            	sh "npm start &"
            }
        }
        stage('Run Functional Tests') {
            steps {
                sauce('e16593fe-6899-463b-9595-e5ba5eb46563') {
                    sh "npm run test-wdio"
                    sh "touch tmp"
                }
            }
        }
    }
}
