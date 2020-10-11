pipeline {
  agent {
    node {
      label 'test'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'sh \'npm --version\''
      }
    }

  }
}