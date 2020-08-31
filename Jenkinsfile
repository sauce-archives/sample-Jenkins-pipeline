pipeline {
    agent any

    stages {
        stage('Build Application') {
            steps {
                nodejs('12.6') { sh 'npm install' }
            }
        }
        stage('Run Unit Tests') {
            steps {
                nodejs('12.6') {sh 'npm test'} 
            }
        }
        stage('Deploy Application') {
            steps {
            	nodejs('12.6') { sh 'npm start &' }
            }
        }
        stage('Run Functional Tests on Sauce Labs') {
            steps {
                sauce('496fc4d5-5eac-43f3-813d-dc31708a20be') {
		    sauceconnect(options: '', sauceConnectPath: '') {
            	        nodejs('12.6') { sh 'npm run test-wdio' }
		    }
                }
            }
        }
        
    }
}