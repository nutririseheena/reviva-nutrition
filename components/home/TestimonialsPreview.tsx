import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="text-center">
          <span
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "rgba(244,178,27,0.15)",
              color: "var(--reviva-green)",
            }}
          >
            Success Stories
          </span>

          <h2
            className="mt-6 text-5xl lg:text-6xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Real People,
            <br />
            Meaningful Change
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Every wellness journey is unique. Here are a few examples of
            how personalized nutrition and sustainable habits can create
            lasting transformation.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote Icon */}

              <div className="absolute right-8 top-8 opacity-20">
                <Quote
                  size={34}
                  color="var(--reviva-gold)"
                />
              </div>

              {/* Name */}

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full font-semibold"
                  style={{
                    backgroundColor: "#eef5eb",
                    color: "var(--reviva-green)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className="font-semibold"
                    style={{
                      color: "var(--reviva-green)",
                    }}
                  >
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {testimonial.condition}
                  </p>
                </div>
              </div>

              {/* Testimonial */}

              <p className="mt-6 italic leading-relaxed text-slate-600">
                "{testimonial.quote}"
              </p>

              {/* Stars */}

              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#f4b21b"
                    color="#f4b21b"
                  />
                ))}
              </div>

              {/* Result Badge */}

              <div className="mt-6">
                <span
                  className="inline-block rounded-full px-4 py-2 text-sm"
                  style={{
                    backgroundColor: "#eef5eb",
                    color: "var(--reviva-green)",
                  }}
                >
                  {testimonial.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}