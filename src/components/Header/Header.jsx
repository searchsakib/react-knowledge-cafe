import profile from '../../assets/images/New folder/profile.png';

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center m-7">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
