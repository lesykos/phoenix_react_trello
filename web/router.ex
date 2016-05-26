defmodule PhoenixTrello.Router do
  use PhoenixTrello.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    # look for the token in the Authorization header
    plug Guardian.Plug.VerifyHeader
    # makes the current resource available through
    # Guardian.Plug.current_resource(conn) if the token is present
    plug Guardian.Plug.LoadResource
  end

  scope "/", PhoenixTrello do
    pipe_through :browser # Use the default browser stack

    get "*path", PageController, :index
  end

  scope "/api", PhoenixTrello do
    pipe_through :api
    scope "/v1" do
      post "/registrations", RegistrationController, :create
      post "/sessions", SessionController, :create
      delete "/sessions", SessionController, :delete
      get "/current_user", CurrentUserController, :show
    end
  end
end
