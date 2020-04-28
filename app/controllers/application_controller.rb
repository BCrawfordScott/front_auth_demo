require 'json_web_token'

class ApplicationController < ActionController::Base

    attr_reader :current_user

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
        token = request.headers['Authorization']
        @payload ||= token == '' ? nil : JsonWebToken.decode(token)
    end

    def current_user
        return nil unless payload
        @current_user ||= User.find_by(id: payload.first['user_id'])
    end
end
