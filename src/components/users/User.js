import React, { Fragment, Component } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      followers,
      following,
      public_repos,
      public_gists,
      login,
      company,
      blog,
      bio,
      hireable,
      html_url,
      avatar_url,
      location,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                className="round-img"
                src={avatar_url}
                alt=""
                style={{ width: "150px" }}
              />
              <h1> {login} </h1>
              <p> Location: {location} </p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h1>Bio</h1>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {name && (
                    <Fragment>
                      <strong>Name: </strong> {name}
                    </Fragment>
                  )}
                </li>

                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>

                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-danger">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
          <Repos repos={repos} />
        </Fragment>
      );
    }
  }
}

export default User;
