type StatusProps = {
    status: "loading" | "success" | "error"
}

const Status = (props: StatusProps) => {

    let message;
    if(props.status === "loading") {
        message = "Loading..."
    } else if (props.status === "success") {
        message = "Data Fetched Successfully"
    } else if (props.status === "error") {
        message = "Error Fetching Data"
    }


  return (
    <div>Status - {message}</div>
  )
}

export default Status