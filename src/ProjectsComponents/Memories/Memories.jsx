import "./Memories.css";
import homeLoggedOut from "./images/home-logged-out.png";
import HomeAfterSignUp from "./images/home-no-memories-alert.png";
import AlbumsPage from "./images/albums.png";
import AlbumPage from "./images/album.png";
import MePage from "./images/me.png";
import Search from "./images/search.png";
import SearchAlert from "./images/search-error-alert.png";
import AlbumsMobile from "./images/albums-mobile.png";
import AlbumsTablet from "./images/albums-tablet.png";
export default function Memories() {
  return (
    <div className="memories-container">
      <img
        className="project-main-image"
        src={homeLoggedOut}
        alt="project home screenshot"
      />
      <h2 className="content-title">Memories</h2>
      <p className="first-p">
        a space where users can create and share albums based on different
        themes or life events where they can add images and thoughts, An album
        can be created for individual users, families, public figures, friends,
        passed away people and much more. Albums can be private or public with
        three types of members each with different authorities. This project was
        built in less than two weeks with my colleague{" "}
        <a href="https://www.linkedin.com/in/natheer-hasan/" target="_blanck">
          Natheer Hasan
        </a>{" "}
        as the capstone project for the Software Engineering Immersive Program
        with General Assebmly using{" "}
        <span className="bold-text ">
          JavaScript, HTML, CSS, React, React Bootstrap , Express.js, MongoDB,
          Mongoose, JWT authentication, and Cloudinary.
        </span>
      </p>
      <li className="project-subTitle">Albums and Members overview</li>
      <p>
        In Memories, users can create albums to store their memories where
        albums can be either private or public. Public albums can be seen and
        joined by any user, while private albums can't be seen or joined unless
        "Admin" approval is taken. Users in album can have one of three roles,
        "Admin", "Poster" or "Member", and they can do the same things whether
        the album is private or public. A "Member" can't add memories directly
        to an album, however, he can create a memory and request to add it to
        the album, where an "Admin" can either accept or reject it. A "Poster"
        can add memories directly to the album without requiring "Admin"
        approval. An "Admin" can add memories directly and he can handle pending
        memories and pending members request, he can also change the roles of
        other members in the album unless the one he wants to change his role is
        the creator of the album.
      </p>
      <li className="project-subTitle">Album public ID</li>
      <p>
        Each album has something called "public ID", a unique string that the
        creator of the album has to enter when creating the album, where its
        primary purpose is to use it when sharing a private album, as it is the
        only way for a user to request to join a private album. This ID will be
        shown to the "Admin" of the album so he does not have to memorize it,
        and he can share with anyone he wants him to join this album, of cource
        "Admin" has to accept each request. One of the thing that we didn't have
        time to implement, is to allow the "Admin" to enter an email of a user
        to give him access directly to the album.{" "}
      </p>
      {/* memory */}
      <li className="project-subTitle">Memory</li>
      <p>
        A memory could be a thought, a feeling, a story or an image and much
        more, hence a memory in "Memories" could be only a text or it can be an
        image with a text. And since some memories happened in the past before
        the date the user might add them to the website, we added an option to
        choose the original date of the memory, and this date can be used to
        sort the memories in the album by their original date, so the user can
        see a history of his memories as they happedned in real life. Another
        thing the user can add to a memory is a "Color", this color is a
        representation of the feelings and emotions of the user about this
        memory, for example, a sad memory can have a "black" color, this color
        will be used when displaying the memory as a small border with that
        color, such that it brings back the same feelings and emotions for the
        user and for others that can see this memory.
      </p>
      <li className="project-subTitle">Why multiple Admins?</li>
      <p>
        Each album can have multiple "Admins", and one of the reasons is that we
        wanted the albums to stay alive in case anything happens to the creator
        of the album, for example, if an album is created to store a family
        memories, and the creator died, then other "Admins" can keep the album
        alive and pass it to next generation of the family. Another reason, is
        that in case of public album, there might be lots of pending requests
        and to handle them it might take multiple people.
      </p>
      <li className="project-subTitle">Home Page</li>
      <p>
        on the homepage there will be a brief introduction about the website
        with a prompt for the user to sign up if he is not logged in. A user
        that is not logged in can search for albums and he can also view public
        albums.
      </p>
      <p>
        After sign up the user will be redirected to the home page, and he will
        see an alert to let him know that his sign up was successful. If the
        user has no memories added yet, then he will be prompted to start
        creating albums. Once the user start joining albums, then memories from
        all albums he has joined will be shown in the homepage.
      </p>
      <div className="project-image-container">
        <img src={HomeAfterSignUp} alt="home after sign up" />
      </div>
      {/* albums page */}
      <li className="project-subTitle">Albums Page</li>
      <p>
        In albums page, user can start creating new albums, and he will see all
        the albums that he h as created and the albums he has joined. Albums can
        be sorted by name or by last updated date. Each album card will show the
        cover image of the album, the album name, and tags that shows whether
        the album is private or public, the role of the user in that album
        "Admin, Poster or Member". If the user is Admin in that album, then he
        will see pending members and pending memories requests count if there
        are any. Another thing the user will see is "Unread" tag, if there are
        new memories added to this album after the last time the user has
        visited this album.
      </p>
      <div className="project-image-container">
        <img src={AlbumsPage} alt="albums page" />
      </div>
      {/* album page */}
      <li className="project-subTitle">Album Page</li>
      <p>
        In album page, user will see the details of that albums, and depending
        of his role, he will see different things. A normal member will only see
        the memories in the album with "Add A Memory" button with the option to
        leave that album. Admin however, will see a list of all members, pending
        members and pending memories and he can accept, reject or block pending
        members, and for pending memories he can accept or reject them. Admin
        can also change the role of other members to make them Admins, Posters
        or Members.
      </p>
      <div className="project-image-container">
        <img src={AlbumPage} alt="album page" />
      </div>
      {/* me page */}
      <li className="project-subTitle">Me Page</li>
      <p>
        Me page, is the page that holds the user profile and where the user can
        update his profile details. Also, it holds all the memories that the
        user has added in all the albums that he has created or joined, sorted
        by creation date. The memory card has a border with the color that the
        user choose when creating the memory.
      </p>
      <div className="project-image-container">
        <img src={MePage} alt="me page" />
      </div>
      {/* search page */}
      <li className="project-subTitle">Search</li>
      <p>
        User can search for albums either by album name or by the album public
        ID. Searching by album name will only show results for public albums and
        will not search in private albums, and that is done intentionally for
        privacy. The results of the search will be shown to the user with the
        options to view the album and if the user is not already a member in
        that album then another button will be shown to him to allow hit to join
        that album. Searching using the album public ID for a public album will
        show the album if it exist with the same options as searching by album
        name.
      </p>
      <div className="project-image-container">
        <img src={Search} alt="search page" />
      </div>
      <p>
        Searching for a private album requires searching by album public ID. If
        the album searched for exist, then the user will see only the album name
        without the album cover image, and with the optoin to request to join
        that album. The album public ID searched for has to match the album
        public ID, otherwise it will not be shown to the user, unlike searching
        by album name, where the album name does not have to match the album
        name for the user to get the results. If the user is already a member in
        that private album, then an alert will be shown to him telling him that
        he is already a member in that album.
      </p>
      <div className="project-image-container">
        <img src={SearchAlert} alt="search with alert " />
      </div>
      {/* responsiveness */}
      <li className="project-subTitle">responsiveness</li>
      <p>
        The website is build with responsiveness in mind, so the website will be
        usable in all screen sizes.{" "}
      </p>
      <div className="repsonsive-image-container">
        <img src={AlbumsMobile} alt="albums in mobile view" />

        <img src={AlbumsTablet} alt="albums in tablet view" />
      </div>
    </div>
  );
}
