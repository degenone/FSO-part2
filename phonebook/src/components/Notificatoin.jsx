const Notification = (props) => {
    const { message } = props;
    return <div className='notification'>{message}</div>;
};

export default Notification;
