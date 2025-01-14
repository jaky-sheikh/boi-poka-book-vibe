import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image } = book;

    return (
        <div className="my-12">
            <h2>Book Details: {bookId}</h2>
            <img src={image} alt="" />
            <br />
            <button className="btn btn-accent mr-6">Read</button>
            <button className="btn btn-accent">Wish list</button>
        </div>
    );
};

export default BookDetails;