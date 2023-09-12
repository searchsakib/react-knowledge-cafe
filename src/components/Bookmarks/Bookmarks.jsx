import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 mt-10 ">
      <div className="w-full bg-gray-400 ml-4  py-5">
        <h2 className="text-3xl text-center  text-black ">
          Bookmarked Blogs: {bookmarks.length}{' '}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
