const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/database").connect();

const authRoutes = require("./routes/authRoutes");
const otpRoutes = require("./routes/otpRoutes");

app.use("/api/otp", otpRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
