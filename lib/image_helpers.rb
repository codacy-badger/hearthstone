module ImageHelpers
  def card_image_tag id, golden # string, boolean
    image_tag "loading.png", "data-src" => "images/cards/#{id}.png"
  end

  def card_tag card_data # hash
    id = card_data["id"]
    amt = card_data["amount"]

    tag = ""
    tag << '<div class="card ' + id + '">'
    tag << '<div class="mana">' + card_data["cost"].to_s + '</div>'
    tag << '<div class="amount">x'+ amt[0].to_s + '</div>'
    tag << '<div class="amount golden">x'+ amt[1].to_s + '</div>'
    tag << card_image_tag(id, false)
    if card_data["type"] == "Minion"
      tag << '<div class="attack">' + card_data["attack"].to_s + '</div>'
      tag << '<div class="health">' + card_data["health"].to_s + '</div>'
    end
    tag << '</div>'

    return tag
  end
end
