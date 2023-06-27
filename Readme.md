# Keeep-clone-server


 
**Auth Routes**
Base URL `/auth`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/verify` | Verify Auth Token |
| POST | `/signup` | Signup user |
| POST | `/login` | Login user |


**User Routes**
Base URL `/api/user`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllUsers` | Get a list with every user |
| GET | `/getOneUser/:id` | Get matching ID user details|
| GET | `/getCollaborators` | Get all users collaborating on a note|
| PUT | `/editUser/:id` |  Matching ID user edition |
| PUT | `/deleteUser/:id` |  Matching ID user deletion |


**Note Routes**
Base URL `/api/note`

| HTTM Method   |  URI path     |  Description  |  
| ------------- | ------------- | ------------- |  
| GET | `/getAllNotes` | Get a list with every note |
| GET | `/getOneNote/:id` | Get matching ID note details|
| POST | `/saveNote` |  Create a new note |
| PUT | `/editNote/:id` |  Matching ID note edition |
| PUT | `/deleteNote/:id` |  Matching ID note deletion |