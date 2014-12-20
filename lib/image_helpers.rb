module ImageHelpers
  def card_image_tag id, golden # string, boolean
    slug = golden ? "#{id}_premium" : "#{id}"
    image_tag "loading.png", "data-src" => "images/cards/#{slug}.png"
  end

  def card_tag card # hash
    id = card[0]
    amt = card[1]

    tag = ""

    if amt[0] > 0
      tag << '<div class="card">'
      tag << card_image_tag(id, false)
      tag << '<div class="amount">x2</div>' if amt[0] > 1
      tag << '</div>'
    end

    if amt[1] > 0
      tag << '<div class="card">'
      tag << card_image_tag(id, true)
      tag << '<div class="amount">x2</div>' if amt[1] > 1
      tag << '</div>'
    end

    return tag
  end
end
