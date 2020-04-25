class ApplicationController < ActionController::Base
    protected

    def authenticate_request!
        unless payload && JsonWebToken.valid_payload(payload.first)
            return invalid_authentication
        end

        invalid_authentication unless current_user
    end

    def invalid_authentication
        render json: { error: "Invalid Request" }, status: :unauthorized
    end

    private

    def payload
        auth_header = request.headers['Authorization']
        token = auth_header.split(' ').last
        JsonWebToken.decode(token)
    end

    def current_user
        User.find_by(id: payload.first['user_id'])
    end
end
