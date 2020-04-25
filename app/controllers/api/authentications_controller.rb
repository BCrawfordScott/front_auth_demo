class Api::AuthenticationsController < ApplicationController
    def create
        user = User.find_by_credentials(
            username: params[:username],
            email: params[:email]
        )
        if user && user.authenticate(params[:password])
            auth_token = JsonWebToken.encode({ user_id: user.id })
            render json: {
                message: "Log in successfull!",
                auth_token: auth_token
            },
            status: :ok
        else
            render json: { errors: user.errors.full_messages }, status: :bad_request
        end
    end
end
