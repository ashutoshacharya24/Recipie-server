// DON'T EDIT. THIS FILE IS GENERATED BY
// ./manage.py export_client
// CHANGE MADES MANUALLY TO THIS FILE WILL BE LOST
// backend/contribs/management/commands/choices_export.py
const CHOICES = {
  "UploadKind": {
    "CHOICE_LIST": [
      {
        "label": "Profile Picture",
        "value": 1
      },
      {
        "label": "Excel Report",
        "value": 2
      },
      {
        "label": "Resume",
        "value": 3
      }
    ],
    "CHOICE_MAP": {
      "1": "Profile Picture",
      "2": "Excel Report",
      "3": "Resume"
    },
    "EXCEL_REPORT": 2,
    "PROFILE_PICTURE": 1,
    "RESUME": 3
  },
  "UploadStatus": {
    "CHOICE_LIST": [
      {
        "label": "Uploading",
        "value": 1
      },
      {
        "label": "Uploaded",
        "value": 2
      },
      {
        "label": "Processing",
        "value": 3
      },
      {
        "label": "Processed",
        "value": 4
      },
      {
        "label": "Error",
        "value": 5
      }
    ],
    "CHOICE_MAP": {
      "1": "Uploading",
      "2": "Uploaded",
      "3": "Processing",
      "4": "Processed",
      "5": "Error"
    },
    "ERROR": 5,
    "PROCESSED": 4,
    "PROCESSING": 3,
    "UPLOADED": 2,
    "UPLOADING": 1
  },
  "UserKind": {
    "ADMIN": 1,
    "CHOICE_LIST": [
      {
        "label": "Admin",
        "value": 1
      },
      {
        "label": "Client",
        "value": 2
      }
    ],
    "CHOICE_MAP": {
      "1": "Admin",
      "2": "Client"
    },
    "CLIENT": 2
  }
};
export default CHOICES;
