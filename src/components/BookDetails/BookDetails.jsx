import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image, bookName, author, tags, review, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <div className="flex justify-center gap-6">
                <div className="w-1/2 py-2">
                    <img className="w-[300px]" src={image} alt="" />
                    <div className="py-4">
                        <button className="btn btn-accent mr-32">Read</button>
                        <button className="btn btn-accent">Wish list</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p>By: {author}</p>
                    <br />
                    <div className="border-t-2 border-dashed"></div>
                    <h4>{tags}</h4>
                    <div className="border-t-2 border-dashed"></div>
                    <br />
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <p>Number of pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>


        </div>
    );
};

export default BookDetails;