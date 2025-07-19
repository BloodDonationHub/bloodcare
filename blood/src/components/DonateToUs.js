import React from 'react';

const DonateToUs = () => {
    return (


        <div className="volunteer-background">
            <div className="banner-wrapper mb-4">
                <img src="/donate.webp" alt="Volunteer Banner" className="banner-img" />
                <div className="banner-text">
                    <h1>Support Blood Care</h1>
                    <p>Join us to save lives and support communities.</p>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center text-primary mb-4">Support Blood Care</h2>
                <p className="lead text-center">
                    To keep our ambulances running and respond to disasters, <strong>we need your support!</strong>
                </p>

                {/* Bank Transfer Info */}
                <div className="card mb-4">
                    <div className="card-header bg-primary text-white">Donate via Bank Transfer / Cheque / Draft / Cash</div>
                    <div className="card-body">
                        <p>Please contact us via telephone: <strong>01-4671608 / 01-4270650</strong></p>
                        <p>You can also send an “A/C payee” Cheque / Draft in favour of:</p>
                        <ul>
                            <li><strong>Account Name:</strong> Nepal Red Cross Society</li>
                            <li><strong>Bank:</strong> Global IME Bank Ltd</li>
                            <li><strong>Branch:</strong> New Baneswor, Kathmandu, Nepal</li>
                            <li><strong>Account Number (Saving):</strong> 32101010000547</li>
                            <li><strong>SWIFT Code:</strong> GLBBNPKA</li>
                        </ul>
                    </div>
                </div>

                {/* Nepali Payment Gateways */}
                <div className="card mb-4">
                    <div className="card-header bg-success text-white">Donate via Digital Wallets</div>
                    <div className="card-body">
                        <p>Scan the QR or send directly to our official wallets:</p>
                        <ul>
                            <li><strong>eSewa ID:</strong> 9800000000</li>
                            <li><strong>Khalti ID:</strong> 9800000001</li>
                            <li><strong>IME Pay ID:</strong> 9800000002</li>
                        </ul>
                        <p className="text-muted"><small>(Replace with your official wallet numbers)</small></p>
                    </div>
                </div>

                {/* Cryptocurrency */}
                <div className="card mb-4">
                    <div className="card-header bg-dark text-white">Donate with Cryptocurrency</div>
                    <div className="card-body">
                        <p>Support us with Bitcoin:</p>
                        <p><strong>BTC Wallet Address:</strong> 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                        <p className="text-muted"><small>(Replace with your official Bitcoin wallet address)</small></p>
                    </div>
                </div>

                {/* Specific District Donation */}
                <div className="alert alert-info">
                    <strong>Want to donate to a specific Red Cross District Chapter?</strong><br />
                    Please contact your nearest district chapter or reach out to our headquarters for assistance.
                </div>

                <p className="text-center mt-4">🙏 Thank you for your kind support! 🙏</p>
            </div>
        </div>
    );
};

export default DonateToUs;
