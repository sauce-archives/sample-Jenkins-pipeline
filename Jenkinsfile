pipeline {
    agent any

    stages {
        stage('Build Application') {
            steps {
                nodejs("11.9") { sh "npm install" }
            }
        }
        stage('Run Unit Tests') {
            steps {
                nodejs("11.9") { sh "npm test" }
            }
        }
        stage('Deploy Application') {
            steps {
            	nodejs("11.9") { sh "npm start &" }
            }
        }
        stage('Run Functional Tests') {
            steps {
                sauce('496fc4d5-5eac-43f3-813d-dc31708a20be') {
                    {
                        nodejs("11.9") { sh "npm run test-wdio" }
                    }
                }
            }
        }
    }
}