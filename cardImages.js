const cardImageMap = {
  "Still in love with your ex? Finish your drink.": "still_in_love_with_ex_running.jpg",
  "[player1], do 1 valid push up, group decides if it counts.": "do_a_valid_pushup.jpg",
  "[player1], Let someone pour a mystery drink — you drink it.": "mystery_drink.jpg",
  "[player1], Call the last person you Snapchatted and ask what they think of you.": "call_snapchat.jpg",
  "[player1], Let someone else decide how much you drink.": "let_someone_decide_drink.jpg",
  "If you've had a pregnancy scare, finish your drink.": "pregnancy_scare.jpg",
  "[player1], give [player2] a dare. If they refuse, they drink.": "give_dare_or_drink.jpg",
  "[player1], guess [player2]'s body count. If they're offended, finish your drink.": "guess_body_count.jpg",
  "[player1], rate [player2]'s flirting ability.": "rate_flirting_ability.jpg",
  "[player1], you are a bitch, take every punishment for a whole round.": "you_a_bitch.jpg",
  "Finish your drink if you’ve ever said you are 'never drinking again’.": "never_drinking_again.jpg",
  "If you've taken/ bought a Plan B in the past month": "bought_a_planb.jpg",
  "Drink for every situationship you've entertained this year.": "drink_for_situationship.jpg",
  "Drink if you’ve sent a risky text in the past 48 hours.": "risky_text.jpg",
  "[player1], invent a drinking rule — everyone follows it.": "invent_a_drinking_rule_everyone_follows_it.jpg",
  "[player1], explain your first impression of [player2]. Be honest.": "first_impression.jpg",
  "[player1], whisper something you've always wondered about [player2]. Answer out loud truthfully or finish your drink": "whisper_question.jpg",
  "[player1], ask [player2] the last thing they lied about.": "ask_last_lie.jpg",
  "[player1], give your phone to [player2] for 60 seconds — app of their choice.": "give_phone_dare.jpg",
  "[player1], take a body shot off someone of your choice.": "bodyshot.jpg",
  "[player1], Read your last flirtatious message out loud or take 3 sips.": "risky_text.jpg",
  "[player1], What's a compliment you've never forgotten?": "ask_personal_questions.jpg",
  "[player1], if you had to hook up with [player2] or your last situationship, who would you pick?": "kiss_situationship_or_friend.jpg",
  "[player1] and [player2], take turns asking personal questions until someone folds and drinks.": "ask_personal_questions.jpg"
};

const nameOverlayStyles = {
  "do_a_valid_pushup.jpg": {
    player1: { top: "70%", left: "50%", fontSize: "16px" }
  },
  "call_snapchat.jpg": {
    player1: { top: "25%", left: "50%", fontSize: "16px" }
  },
  "mystery_drink.jpg": {
    player1: { top: "25%", left: "50%", fontSize: "16px" }
  },
  "let_someone_decide_drink.jpg": {
    player1: { top: "25%", left: "40%", fontSize: "16px" }
  },
  "give_dare_or_drink.jpg": {
    player1: { top: "15%", left: "35%" },
    player2: { top: "15%", left: "65%" }
  },
  "guess_body_count.jpg": {
    player1: { top: "22%", left: "25%", fontSize: "15px" },
    player2: { top: "22%", left: "75%", fontSize: "15px" }
  },
  "rate_flirting_ability.jpg": {
    player1: { top: "20%", left: "30%", fontSize: "14px" },
    player2: { top: "20%", left: "70%", fontSize: "14px" }
  },
  "you_a_bitch.jpg": {
    player1: { top: "15%", left: "30%", fontSize: "16px" }
  },
  "invent_a_drinking_rule_everyone_follows_it.jpg": {
    player1: { top: "10%", left: "50%", fontSize: "16px" }
  },
  "first_impression.jpg": {
    player1: { top: "20%", left: "30%", fontSize: "14px" },
    player2: { top: "20%", left: "70%", fontSize: "14px" }
  },
  "whisper_question.jpg": {
    player1: { top: "28%", left: "35%", fontSize: "14px" },
    player2: { top: "28%", left: "65%", fontSize: "14px" }
  },
  "ask_last_lie.jpg": {
    player1: { top: "20%", left: "30%", fontSize: "15px" },
    player2: { top: "20%", left: "70%", fontSize: "15px" }
  },
  "give_phone_dare.jpg": {
    player1: { top: "25%", left: "30%", fontSize: "14px" },
    player2: { top: "25%", left: "70%", fontSize: "14px" }
  },
  "bodyshot.jpg": {
    player1: { top: "22%", left: "50%", fontSize: "15px" }
  },
  "ask_personal_questions.jpg": {
    player1: { top: "15%", left: "35%", fontSize: "14px" },
    player2: { top: "15%", left: "65%", fontSize: "14px" }
  },
  "kiss_situationship_or_friend.jpg": {
    player1: { top: "25%", left: "30%", fontSize: "14px" },
    player2: { top: "25%", left: "70%", fontSize: "14px" }
  }
};
