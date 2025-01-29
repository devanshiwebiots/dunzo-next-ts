import ActivityFeedClass from "./ActivityFeedClass/ActivityFeedClass";
import MutualFriends from "./MutualFriends/MutualFriends";
import MyProfileClass from "./MyProfileClass/MyProfileClass";

const LeftBar = () => {
  return (
    <>
        <MyProfileClass />
        <MutualFriends />
        <ActivityFeedClass /> 
    </>
  );
};

export default LeftBar;
