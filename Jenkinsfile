pipeline {
    agent any
    tools {
        nodejs 'NodeNode' // Matches the name set in Jenkins for NodeJS
        maven 'Maven'     // Matches the name set in Jenkins for Maven
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Mourya-K/Devops_Assignment', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Start Application') {
        //     steps {
        //         sh 'nohup node index.js &'
        //     }
        // }
        stage('Build with Maven') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh 'mvn test -DfailIfNoTests=false'
            }
        }
    }
    post {
        success {
            echo 'Build and tests were successful!'
        }
        failure {
            echo 'Build or tests failed!'
        }
        always {
            echo 'Cleaning up...'
        }
    }
}
