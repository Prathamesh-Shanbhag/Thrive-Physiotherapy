function loadTestimonials() {
  // Use axios to fetch the reviews
  axios
    .get("./assets/js/reviews.json")
    .then(function (response) {
      const reviews = response.data;

      const testimonialTrack = document.querySelector(".testimonial-track");
      if (!testimonialTrack) return;

      // Generate HTML for reviews
      const reviewsHTML = reviews
        .map(
          (review) => `
                    <a href="${
                      review.reviewUrl
                    }" target="_blank" class="testimonial-link">
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="testimonial-text">
                                    "${review.text}"
                                </div>
                                <div class="testimonial-header">
                                    <div class="testimonial-author">
                                        <h4>${review.name}</h4>
                                        <p>${"⭐".repeat(review.stars)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                `
        )
        .join("");

      // Add original reviews plus duplicates for infinite scroll
      testimonialTrack.innerHTML = reviewsHTML + reviewsHTML;
    })
    .catch(function (error) {
      console.error("Error loading reviews:", error);
      const testimonialTrack = document.querySelector(".testimonial-track");
      if (testimonialTrack) {
        testimonialTrack.innerHTML = `
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <div class="testimonial-text">
                                Unable to load testimonials at this time.
                            </div>
                        </div>
                    </div>
                `;
      }
    });
}

// Load testimonials when the page loads
document.addEventListener("DOMContentLoaded", loadTestimonials);
