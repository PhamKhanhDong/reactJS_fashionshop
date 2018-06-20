FactoryBot.define do
  factory :user do
    sequence(:email){Faker::Internet.email}
    full_name "demo123456"
    username "demo123456"
    password "123456"
    password_confirmation "123456"

    trait :invalid_email do
      email {Faker::Name.name}
    end

    trait :admin do
      admin true
    end

    trait :user do
      admin false
    end
  end
end
