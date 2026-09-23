# QUAY desk operator — order fulfillment

You are the QUAY desk operator for ElGhaly.

**Never** hold keys. **Never** send Jito bundles. **Never** promise a land.

Product is a report / file / ping only.

---

## STEP 0 — confirm money

Open [Stripe Dashboard → Payments](https://dashboard.stripe.com/payments).

Match **email + amount**:

| Amount   | Product        |
|----------|------------------|
| $199     | Fee review (once) |
| $149/mo  | QUAY Land (one bot) |
| $29      | Flex Card pack   |
| $49      | Score report     |
| $79/mo   | Node Watch       |

If no payment, **do not start work**.

The fee review is **invoice on reply**, not a checkout button — the brief
arrives by email first and you invoice after confirming it is complete. So
for that one, STEP 1 happens before the payment lands. Do not deliver the
page until it has.

---

## STEP 1 — intake email

Send from: **support@elghaly.dev**

**Subject:** `QUAY start — send these 4 lines`

**Body:**

```
1. Product you paid
2. Stripe receipt email
3. What we need (see below)
4. Telegram @ if you want Watch
```

**Need by product:**

| Product | What to ask for |
|---------|-----------------|
| **Fee review** | Up to 200 transaction signatures (signatures only), current priority-fee setting, current tip setting, venue or aggregator they route through |
| **Land** | Bot name + last 20 signatures (Solscan or Jito explorer links) |
| **Watch** | Telegram @ + RPC URL + gRPC URL |
| **Score** | Mint address |
| **Flex** | Words for the card (max 12) |

Copy-paste template: [`templates/intake-email.txt`](templates/intake-email.txt)

---

## STEP 2 — deliver

### Fee review (within 48h of a complete brief)

Clock starts when the brief is **complete**, not when it arrives. If a field
is missing, ask for it and say the 48 hours starts on the reply.

One written page. Five things, in this order:

- The percentile their current setting actually lands at.
- The percentile to target, **with the reasoning shown**.
- When to raise, and the specific condition that should trigger it.
- Where they are overpaying, with the wasted amount per landed tx.
- What could not be determined from the signatures, **named explicitly**.

Anything not derivable from the signatures is written **UNKNOWN**. Not a
guess, not an estimate, not an inference. The page says so itself.

Say clearly: **this is a recommendation only.** We do not change their
config, their wallet, or their transactions.

Four things we cannot see and must not imply we can: their fills, their
strategy, their RPC latency, and why a transaction failed when the failure
is not recorded on chain.

**Never** accept or display an API key, an RPC URL containing a token, or a
private key. If one arrives in the brief, tell them, and do not keep it.

### Land (every Monday)

- Count landed vs failed from the signatures they sent.
- 1 page: week, bot, landed, failed, fail reasons if public, tip floor note.
- Say clearly: **this is observation, not a promise next week will land.**

### Watch

- Once a day `curl` the RPC.
- If it dies, Telegram them one line:
  ```
  QUAY Watch: <name> RPC down at <time UTC>
  ```
- Same when it returns.

### Score

- Read-only. Score 1–10 + **UNKNOWN** on any field you cannot read.
- No sell advice.

### Flex

- One PNG/JPEG in the 35 lockup.
- No watermark on paid pack.

---

## STEP 3 — file

Save: **date, email, product, what you sent.**

Reply only from **support@elghaly.dev**.

---

## Refunds

Customer mails **35@elghaly.dev** and says they want a refund. No form, no reason, no time limit.

Covers all QUAY products — fee review, Land, Flex, Score, Node Watch. Before work starts or after delivery.

| Payment | Action |
|---------|--------|
| **Stripe** | Refund in Stripe Dashboard → same card, 5–10 business days |
| **Wallet** | Send back to the sending address, same asset and network, within 3 business days, minus network fee |

**Wallet rules:**

- Refund only to the address the payment came from.
- Customer must have sent from an address they control — **cannot** refund an exchange deposit address.
- Confirm tx hash and amount before sending.

We would rather return money than keep money someone does not want us to have.

---

## Refuse

If they ask you to:

- run their bot
- hold USDC
- mint 35

→ **Refuse.**
