require "rails_helper"

RSpec.describe "User models", type: :model do
  let(:user) {FactoryBot.create :user}
  subject {user}

  context "user is invalid" do
    user = FactoryBot.build :user, :invalid_email
    it "invalid email" do
      expect(user).not_to be_valid
    end
  end

  it "when full name invalid" do
    expect(subject.full_name).not_to be nil
  end

  it "when username invalid" do
    expect(subject.username).not_to be nil
  end

  it "when email invalid" do
    expect(subject.email).not_to be nil
  end

  context "validate" do
    it {should have_secure_password}

    it "validate full name" do
      should validate_presence_of :full_name
      should validate_length_of(:full_name).is_at_most 255
    end

    it "validate username" do
      should validate_presence_of :username
      should validate_length_of(:username).is_at_most 255
    end

    it "validate email" do
      should validate_presence_of :email
      should validate_length_of(:email).is_at_most 255
    end
  end

  context "associations" do
    it{should have_many :orders}
    it{should have_many :addresses}
    it{should have_many :comments}
    it{should have_many :rates}
    it{should have_many :wishlists}
  end

  context "columns" do
    it {should have_db_column(:full_name).of_type :string}
    it {should have_db_column(:username).of_type :string}
    it {should have_db_column(:email).of_type :string}
    it {should have_db_column(:password_digest).of_type :string}
    it {should have_db_column(:remember_digest).of_type :string}
    it {should have_db_column(:activation_digest).of_type :string}
    it {should have_db_column(:activated).of_type :boolean}
    it {should have_db_column(:activated_at).of_type :datetime}
  end
end
