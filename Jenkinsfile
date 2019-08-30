pipeline {
    agent any

    stages {
        stage('Build Application') { 
            node("11.9"){
                sh "npm install"
            }
        }
        stage('Run Unit Tests') {
            node("11.9") {
                sh "npm test"
            }
        }
        stage('Deploy Application') {
            node("11.9") {
                sh "npm start &"
            }
        }
        stage('Run Functional Tests') {
                sauce('e16593fe-6899-463b-9595-e5ba5eb46563') {
                    node("11.9") {
                        sh "npm run test-wdio"
                    }
                }
        }
    }
}