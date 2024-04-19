import GoBack from '../MainComponents/GoBack';

const NotFound = () => {
    return (
        <div>
            <GoBack/>
            <h3 className="page_not_found">
                Whoops! It seems we've hit a dead end. Let's get back on track. Navigate back to the homepage to continue your exploration. See you there!
            </h3>
        </div>

    )
}
export default NotFound