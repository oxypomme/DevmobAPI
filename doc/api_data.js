define({ "api": [
  {
    "type": "get",
    "url": "/evaluateurs/:name",
    "title": "Request Evaluator Information with Name",
    "name": "GetEvaluators",
    "group": "Evaluators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the evaluator</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the evaluator with the name</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The evaluators with the name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n  {\n     \"id_evaluateur\": 2,\n     \"nom\": \"LAROCHE\",\n     \"prenom\": \"Pierre\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/evaluators.js",
    "groupTitle": "Evaluators"
  },
  {
    "type": "get",
    "url": "/evaluateurs/:name",
    "title": "Request Evaluator Information with Logs",
    "name": "GetEvaluators",
    "group": "Evaluators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mail",
            "description": "<p>The mail of the evaluator</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>The password of the evaluator</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the evaluator with the logs</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The evaluators with the corresponding evaluators</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n  {\n     \"id_evaluateur\": 2,\n     \"nom\": \"LAROCHE\",\n     \"prenom\": \"Pierre\",\n     \"email\": \"pl@ul.fr\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/evaluators.js",
    "groupTitle": "Evaluators"
  },
  {
    "type": "get",
    "url": "/projets",
    "title": "Request All Projects Information",
    "name": "GetProjects",
    "group": "Projects",
    "description": "<p>Gets the rpjects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The projects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"id_projet\": 1,\n        \"numero\": 1,\n        \"titre\": \"Gestion du site irsid.fr\",\n        \"id_encadrant\": 3,\n        \"etudiants\": [\n            1,\n            4\n        ],\n        \"notes\": [\n            {\n               \"id_evaluateur\": 2,\n               \"type_notation\": \"P\",\n               \"note_1\": 4,\n               \"note_2\": 3.5,\n               \"note_3\": 2.75,\n               \"commentaire\": \"Design très original\"\n            }\n        ]\n    },\n    {\n        \"id_projet\": 2,\n        \"numero\": 2,\n        \"titre\": \"Test de Rorschach\",\n        \"id_encadrant\": 1,\n        \"etudiants\": [\n            2,\n            3\n        ],\n        \"notes\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/projects.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/projets/:id",
    "title": "Request Single Project Information",
    "name": "GetProjects",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the project</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the project with the id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The projects with the id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n  {\n      {\n          \"id_projet\": 1,\n          \"numero\": 1,\n          \"titre\": \"Gestion du site irsid.fr\",\n          \"id_encadrant\": 3,\n          \"etudiants\": [\n              1,\n              4\n          ],\n          \"notes\": [\n              {\n                 \"id_evaluateur\": 2,\n                 \"type_notation\": \"P\",\n                 \"note_1\": 4,\n                 \"note_2\": 3.5,\n                 \"note_3\": 2.75,\n                 \"commentaire\": \"Design très original\"\n              }\n          ]\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/projects.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/etudiants",
    "title": "Request All Student Information",
    "name": "GetStudents",
    "group": "Students",
    "description": "<p>Gets the students</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The students</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n  {\n     \"id_evaluateur\": 2,\n     \"nom\": \"LAROCHE\",\n     \"prenom\": \"Pierre\"\n  },\n  {\n     \"id_etudiant\": 2,\n     \"nom\": \"PONSIGNON\",\n     \"prenom\": \"Laurine\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/students.js",
    "groupTitle": "Students"
  },
  {
    "type": "get",
    "url": "/etudiants/:id",
    "title": "Request Single Student Information",
    "name": "GetStudents",
    "group": "Students",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the student</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the student with the id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "optional": false,
            "field": "result",
            "description": "<p>The students with the id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n  {\n     \"id_etudiant\": 1,\n     \"nom\": \"BOMBARDIER\",\n     \"prenom\": \"Julien\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/students.js",
    "groupTitle": "Students"
  }
] });