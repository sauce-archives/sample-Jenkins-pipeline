pipeline {
    agent any

    stages {
        stage('Build Application') { 
            sh "npm install"
        }
        stage('Run Unit Tests') {
            sh "npm test"
        }
        stage('Deploy Application') {
            sh "npm start &"
        }
        stage('Run Functional Tests') {
                sauce('e16593fe-6899-463b-9595-e5ba5eb46563') {
                    sh "npm run test-wdio"
                }
        }
    }
}