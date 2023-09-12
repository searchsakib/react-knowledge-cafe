const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3">
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length} </h2>
    </div>
  );
};

export default Bookmarks;
