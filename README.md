# Playroll Tech Test

For this task, you will be laying the foundation and creating the first page for a new platform. The first page we need to create is a list of employees, which can be "reviewed" by the user.

Please fork the repository and make changes in a local copy, as opposed to in the public git repo.

Data can be fetched and updated using the following employee API endpoints.

- `GET https://627122286a36d4d62c21cf1d.mockapi.io/api/v1/employee`
- `PUT https://627122286a36d4d62c21cf1d.mockapi.io/api/v1/employee/:id`

## Task specification

You are free to structure the application and use any dependencies you wish, as long as you can explain and justify your choice. The only restriction is that [Material UI](https://mui.com/) is used as a design system / component library. V5 is installed already in this project (bootstrapped with `create-react-app`).

Here's the full spec:

- Fetch employees from the API endpoints above, and show them in a list or table (with loading state)
- Add a "Mark as Reviewed" button to each employee row; when clicked, it should update that employee with `{ reviewed: true }`
    - Users shouldn't be able to complete any actions while the update is happening, and data should be refreshed when the update is complete
- Add a "Group by Company" button to be able to identify employees from the same company

## Next steps

When the task is complete, please send a link to the forked repo to `danieln@playroll.com`. We'll be in touch as soon as possible afterwards to set up a follow-up call. During this call, we'll discuss what you've made and brainstorm how we could expand the application to cover new use cases.

Good luck, and please don't hesitate to reach out if you have any questions!
