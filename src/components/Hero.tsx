import Image from "next/image";
import { memo } from "react";

export const Hero = memo(() => (
    <section
        className="section hero"
        id="home"
        style={{ "backgroundImage": "url('/images/hero-bg.png')" } as React.CSSProperties}
        aria-label="hero"
    >
        <div className="custom-container">
            <div className="hero-content">
                <p className="section-subtitle">Welcome To Basuki Dental</p>
                <h1 className="h1 hero-title">We Are Best Dental Service</h1>
                <p className="hero-text">
                    Transforming smiles with precision, care, and cutting-edge technology. Experience dentistry that exceeds expectations.
                </p>
                <form
                    action=""
                    className="hero-form"
                >
                    <input
                        type="email"
                        name="email_address"
                        aria-label="email"
                        placeholder="Your Email Address..."
                        required
                        className="email-field"
                    />
                    <button
                        type="submit"
                        className="btn"
                    >
                        Get Call Back
                    </button>
                </form>
            </div>

            <figure className="hero-banner">
                <Image
                    src="/images/hero-banner.webp"
                    width={587}
                    height={839}
                    alt="hero banner"
                    className="w-fill"
                />
            </figure>

        </div>
    </section>
));

Hero.displayName = "Hero";