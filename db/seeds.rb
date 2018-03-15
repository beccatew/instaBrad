20.times do
  App.create(
    name: Faker::HarryPotter.character,
    image: Faker::Avatar.image,
    description: Faker::Hipster.sentence,
  )
end
