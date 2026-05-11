import { TextField, Label, Input, FieldError } from "@heroui/react";
import { DollarSign, TrendingUp } from "lucide-react";

const PricingSection = ({ defaultValues = {} }) => {
  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary font-heading mb-4 sm:mb-6 pb-3 border-b border-border">
        Pricing
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Price */}
        <TextField
          name="price"
          type="number"
          isRequired
          defaultValue={defaultValues.price}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-accent" />
            Price <span className="text-accent">*</span>
          </Label>
          <Input
            type="number"
            placeholder="1299"
            min="0"
            step="0.01"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Discount Price */}
        <TextField
          name="discountPrice"
          type="number"
          defaultValue={defaultValues.discountPrice || ""}
        >
          <Label className="text-sm font-semibold text-text font-body mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            Discount Price
          </Label>
          <Input
            type="number"
            placeholder="999"
            min="0"
            step="0.01"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1.5 font-body" />
        </TextField>

        {/* Currency */}
        <div>
          <Label className="text-sm font-semibold text-text font-body mb-2 block">
            Currency <span className="text-accent">*</span>
          </Label>
          <select
            name="currency"
            required
            defaultValue={defaultValues.currency || "USD"}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
