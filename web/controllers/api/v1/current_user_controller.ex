defmodule PhoenixTrello.CurrentUserController do
  use PhoenixTrello.Web, :controller

  # check if there is a previously verified token and
  # if not it will handle the request with the :unauthenticated function of the SessionController
  plug Guardian.Plug.EnsureAuthenticated, handle: PhoenixTrello.SessionController

  def show(conn, _) do
    user = Guardian.Plug.current_resource(conn)

    conn
    |> put_status(:ok)
    |> render("show.json", user: user)
  end
end
