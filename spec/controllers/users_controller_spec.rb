require "rails_helper"

describe UsersController, type: :controller  do
  let(:user) {FactoryBot.create :user}
  describe "GET .new" do
    it "has a 200 status code" do
      get :new
      expect(response.status).to eq(200)
    end
  end
end

