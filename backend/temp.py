import re
print(re.search(r"\{.*\}","""
This is the assignment text

Multiple lines
Here's an example JSON object based on the assignment:

```
{
  "title": "Homework Assignment",
  "description": "Complete the assigned homework tasks",
  "due_date": "2021-10-31",
  "tasks": [
    {
      "subtask": "Read Chapter 5",
      "duration": 60
    },
    {
      "subtask": "Complete Exercise 1",
      "duration": 30
    },
    {
      "subtask": "Write a summary of Chapter 5",
      "duration": 45
    }
  ]
}
```

In this example, the title of the assignment is "Homework Assignment", the description is "Complete the assigned homework tasks", the due date is October 31st, 2021, and there are three tasks to complete. Each task has a subtask (e.g. "Read Chapter 5") and a duration in minutes (e.g. 60).

"""))