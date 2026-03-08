import nodemailer from "nodemailer";

export const sendOrderEmail = async ({ email, name, items }) => {

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsHTML = items
    .map(
      (item) => `
      <tr>
        <td>${item.title}</td>
        <td>${item.quantity}</td>
        <td>৳${item.price * item.quantity}</td>
      </tr>
    `
    )
    .join("");

  const mailOptions = {
    from: `"Hero Kidz" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Order Invoice",
    html: `
      <div style="font-family:Arial;padding:20px">
        <h2>Order Confirmation</h2>
        <p>Hello ${name},</p>
        <p>Your order has been placed successfully.</p>

        <table border="1" cellpadding="10" cellspacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
          </tbody>
        </table>

        <h3>Total: ৳${total}</h3>

        <p>Thank you for shopping with us!</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};