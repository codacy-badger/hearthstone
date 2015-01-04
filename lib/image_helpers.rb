module ImageHelpers
  def card_image_tag id, golden # string, boolean
    image_tag "loading.png", "data-src" => "images/cards/#{id}.png"
  end

  def card_tag name, data # hash
    id = data["id"]
    amt = data["amount"]

    tag = ""
    tag << '<div class="card ' + id + '">'
    tag << '<div class="mana">' + data["cost"].to_s + '</div>'
    tag << '<div class="amount">x'+ amt[0].to_s + '</div>'
    tag << '<div class="amount golden">x'+ amt[1].to_s + '</div>'
    tag << '<div class="name">' + name + '</div>'
    tag << card_image_tag(id, false)
    if data["text"]
      text = data["text"].gsub(/[\$#](\d+)/, '\1')
      tag << '<div class="info">' + text + '</div>'
    else
      tag << '<div class="info"></div>' # TODO refactor
    end
    if data["type"] == "Minion"
      tag << '<div class="attack">' + data["attack"].to_s + '</div>'
      tag << '<div class="health">' + data["health"].to_s + '</div>'
    else
      tag << '<div class="attack none"></div>'
      tag << '<div class="health none"></div>'
    end
    tag << '<div class="type">' + data["race"] + '</div>' if data["race"]
    tag << '</div>'

    return tag
  end
end
